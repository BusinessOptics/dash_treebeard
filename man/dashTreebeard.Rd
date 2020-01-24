% Auto-generated: do not edit by hand
\name{dashTreebeard}

\alias{dashTreebeard}

\title{DashTreebeard component}

\description{
ExampleComponent is an example component. It takes a property, `label`, and displays it. It renders an input with the property `value` which is editable by the user.
}

\usage{
dashTreebeard(id=NULL, data=NULL, selected=NULL, toggled=NULL, style=NULL, persistence=NULL,
persisted_props=NULL, persistence_type=NULL)
}

\arguments{
\item{id}{Character. The ID used to identify this component in Dash callbacks.}

\item{data}{}

\item{selected}{Character. }

\item{toggled}{List of characters. }

\item{style}{Logical | numeric | character | named list | unnamed list. }

\item{persistence}{Logical | character | numeric. Used to allow user interactions in this component to be persisted when
the component - or the page - is refreshed. If `persisted` is truthy and
hasn't changed from its previous value, a `value` that the user has
changed while using the app will keep that change, as long as
the new `value` also matches what was given originally.
Used in conjunction with `persistence_type`.}

\item{persisted_props}{List of a value equal to: 'selected', 'toggled's. Properties whose user interactions will persist after refreshing the
component or the page. Since only `value` is allowed this prop can
normally be ignored.}

\item{persistence_type}{A value equal to: 'local', 'session', 'memory'. Where persisted user changes will be stored:
memory: only kept in memory, reset on page refresh.
local: window.localStorage, data is kept after the browser quit.
session: window.sessionStorage, data is cleared once the browser quit.}
}
