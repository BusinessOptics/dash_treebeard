import React, {Component, useState} from 'react';
import PropTypes from 'prop-types';
import {Treebeard} from 'react-treebeard';
import defaultTheme from '../defaultTheme';

const decorateData = ({key, name, children}, selected, toggleSet) => {
    return {
        key,
        name,
        toggled: toggleSet.includes(key),
        active: key == selected,
        children:
            children &&
            children.map(node => decorateData(node, selected, toggleSet)),
    };
};

/**
 * ExampleComponent is an example component.
 * It takes a property, `label`, and
 * displays it.
 * It renders an input with the property `value`
 * which is editable by the user.
 */
const DashTreebeard = ({id, data, selected, toggled, style, setProps}) => {
    data = data || rootData;
    style = style || defaultTheme;
    toggled = toggled || [];

    const onToggle = (node, nodeToggled) => {
        if (node.children) {
            if (nodeToggled) {
                setProps({toggled: [...toggled, node.key]});
            } else {
                setProps({toggled: toggled.filter(key => key != node.key)});
            }
        } else {
            setProps({selected: node.key});
        }
    };
    return (
        <Treebeard
            data={decorateData(data, selected, toggled)}
            onToggle={onToggle}
            style={style}
            decorators={{
                Header: props => {
                    return <div style={props.style}>{props.node.name}</div>;
                },
            }}
        />
    );
};

export default DashTreebeard;

DashTreebeard.defaultProps = {
    persisted_props: ['selected', 'toggled'],
    persistence_type: 'local',
};

const lazyNodeType = () => nodeType;
const nodeType = PropTypes.shape({
    key: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    children: PropTypes.arrayOf(lazyNodeType),
});

DashTreebeard.propTypes = {
    /**
     * The ID used to identify this component in Dash callbacks.
     */
    id: PropTypes.string,

    data: nodeType.isRequired,

    selected: PropTypes.string,

    toggled: PropTypes.arrayOf(PropTypes.string),

    style: PropTypes.any,

    /**
     * Used to allow user interactions in this component to be persisted when
     * the component - or the page - is refreshed. If `persisted` is truthy and
     * hasn't changed from its previous value, a `value` that the user has
     * changed while using the app will keep that change, as long as
     * the new `value` also matches what was given originally.
     * Used in conjunction with `persistence_type`.
     */
    persistence: PropTypes.oneOfType([
        PropTypes.bool,
        PropTypes.string,
        PropTypes.number,
    ]),

    /**
     * Properties whose user interactions will persist after refreshing the
     * component or the page. Since only `value` is allowed this prop can
     * normally be ignored.
     */
    persisted_props: PropTypes.arrayOf(
        PropTypes.oneOf(['selected', 'toggled'])
    ),

    /**
     * Where persisted user changes will be stored:
     * memory: only kept in memory, reset on page refresh.
     * local: window.localStorage, data is kept after the browser quit.
     * session: window.sessionStorage, data is cleared once the browser quit.
     */
    persistence_type: PropTypes.oneOf(['local', 'session', 'memory']),

    /**
     * Dash-assigned callback that should be called to report property changes
     * to Dash, to make them available for callbacks.
     */
    setProps: PropTypes.func,
};
