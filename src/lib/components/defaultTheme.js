export default {
    tree: {
        base: {
            listStyle: 'none',
            margin: 0,
            color: 'black',
            backgroundColor: 'none',
            padding: 0,
            fontSize: '14px',
        },
        node: {
            base: {
                position: 'relative',
            },
            link: {
                cursor: 'pointer',
                position: 'relative',
                padding: '0px 5px',
                display: 'block',
            },
            activeLink: {
                background: 'lightgrey',
            },
            toggle: {
                base: {
                    position: 'relative',
                    display: 'inline-block',
                    verticalAlign: 'top',
                    marginLeft: '-5px',
                    height: '24px',
                    width: '24px',
                },
                wrapper: {
                    position: 'absolute',
                    top: '50%',
                    left: '50%',
                    margin: '-7px 0 0 -7px',
                    height: '14px',
                },
                height: 14,
                width: 14,
                arrow: {
                    fill: 'black',
                    strokeWidth: 0,
                },
            },
            header: {
                base: {
                    display: 'inline-block',
                    verticalAlign: 'top',
                },
                connector: {
                    width: '2px',
                    height: '12px',
                    borderLeft: 'solid 2px black',
                    borderBottom: 'solid 2px black',
                    position: 'absolute',
                    top: '0px',
                    left: '-21px',
                },
                title: {
                    lineHeight: '24px',
                    verticalAlign: 'middle',
                },
            },
            subtree: {
                listStyle: 'none',
                paddingLeft: '19px',
            },
            loading: {
                color: 'lightgrey',
            },
        },
    },
};
