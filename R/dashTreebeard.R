# AUTO GENERATED FILE - DO NOT EDIT

dashTreebeard <- function(id=NULL, data=NULL, selected=NULL, toggled=NULL, style=NULL, persistence=NULL, persisted_props=NULL, persistence_type=NULL) {
    
    props <- list(id=id, data=data, selected=selected, toggled=toggled, style=style, persistence=persistence, persisted_props=persisted_props, persistence_type=persistence_type)
    if (length(props) > 0) {
        props <- props[!vapply(props, is.null, logical(1))]
    }
    component <- list(
        props = props,
        type = 'DashTreebeard',
        namespace = 'dash_treebeard',
        propNames = c('id', 'data', 'selected', 'toggled', 'style', 'persistence', 'persisted_props', 'persistence_type'),
        package = 'dashTreebeard'
        )

    structure(component, class = c('dash_component', 'list'))
}
