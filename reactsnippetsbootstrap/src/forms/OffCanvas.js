import React, {Component} from 'react';

class OffCanvas extends React.Component {
    constructor() {
        super()
    }
    render() {
        return (
            <div className="container">
                <main role="main" class="container">
                    <div className="d-flex align-items-center p-3 my-3 text-white-50 bg-purple rounded shadow-sm">
                        <form className="form-inline my-2 my-lg-0">
                            <input className="form-control mr-sm-2" type="text" placeholder="Search"
                                   aria-label="Search"/>
                            <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>

                        </form>
                    </div>
                    <div className="my-3 p-3 bg-white rounded shadow-sm">
                        <h6 className="border-bottom border-gray pb-2 mb-0">Recent updates</h6>
                        <div className="media text-muted pt-3">
                            <svg className="bd-placeholder-img mr-2 rounded" width="32" height="32"
                                 xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid slice"
                                 focusable="false" role="img" aria-label="Placeholder: 32x32"><title>Placeholder</title>
                                <rect width="100%" height="100%" fill="#007bff"/>
                                <text x="50%" y="50%" fill="#007bff" dy=".3em">32x32</text>
                            </svg>
                            <p className="media-body pb-3 mb-0 small lh-125 border-bottom border-gray">
                                <strong className="d-block text-gray-dark">@username</strong>
                                Donec id elit non mi porta gravida at eget metus. Fusce dapibus, tellus ac cursus
                                commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus.
                            </p>
                        </div>
                        <div classNameclassName="media text-muted pt-3">
                            <svg className="bd-placeholder-img mr-2 rounded" width="32" height="32"
                                 xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid slice"
                                 focusable="false" role="img" aria-label="Placeholder: 32x32"><title>Placeholder</title>
                                <rect width="100%" height="100%" fill="#e83e8c"/>
                                <text x="50%" y="50%" fill="#e83e8c" dy=".3em">32x32</text>
                            </svg>
                            <p className="media-body pb-3 mb-0 small lh-125 border-bottom border-gray">
                                <strong className="d-block text-gray-dark">@username</strong>
                                Donec id elit non mi porta gravida at eget metus. Fusce dapibus, tellus ac cursus
                                commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus.
                            </p>
                        </div>
                        <div className="media text-muted pt-3">
                            <svg className="bd-placeholder-img mr-2 rounded" width="32" height="32"
                                 xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid slice"
                                 focusable="false" role="img" aria-label="Placeholder: 32x32"><title>Placeholder</title>
                                <rect width="100%" height="100%" fill="#6f42c1"/>
                                <text x="50%" y="50%" fill="#6f42c1" dy=".3em">32x32</text>
                            </svg>
                            <p className="media-body pb-3 mb-0 small lh-125 border-bottom border-gray">
                                <strong className="d-block text-gray-dark">@username</strong>
                                Donec id elit non mi porta gravida at eget metus. Fusce dapibus, tellus ac cursus
                                commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus.
                            </p>
                        </div>
                        <small className="d-block text-right mt-3">
                            <a href="#">All updates</a>
                        </small>
                    </div>
                    <div className="my-3 p-3 bg-white rounded shadow-sm">
                        <h6 className="border-bottom border-gray pb-2 mb-0">Suggestions</h6>

                        <div className="media text-muted pt-3">
                            <svg className="bd-placeholder-img mr-2 rounded" width="32" height="32"
                                 xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid slice"
                                 focusable="false" role="img" aria-label="Placeholder: 32x32"><title>Placeholder</title>
                                <rect width="100%" height="100%" fill="#007bff"/>
                                <text x="50%" y="50%" fill="#007bff" dy=".3em">32x32</text>
                            </svg>
                            <div className="media-body pb-3 mb-0 small lh-125 border-bottom border-gray">
                                <div className="d-flex justify-content-between align-items-center w-100">
                                    <strong className="text-gray-dark">Full Name</strong>
                                    <a href="#">Follow</a>
                                </div>
                                <span className="d-block">@username</span>
                            </div>
                        </div>
                        <div className="media text-muted pt-3">
                            <svg className="bd-placeholder-img mr-2 rounded" width="32" height="32"
                                 xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid slice"
                                 focusable="false" role="img" aria-label="Placeholder: 32x32"><title>Placeholder</title>
                                <rect width="100%" height="100%" fill="#007bff"/>
                                <text x="50%" y="50%" fill="#007bff" dy=".3em">32x32</text>
                            </svg>
                            <div className="media-body pb-3 mb-0 small lh-125 border-bottom border-gray">
                                <div className="d-flex justify-content-between align-items-center w-100">
                                    <strong className="text-gray-dark">Full Name</strong>
                                    <a href="#">Follow</a>
                                </div>
                                <span class="d-block">@username</span>
                            </div>
                        </div>
                        <div className="media text-muted pt-3">
                            <svg className="bd-placeholder-img mr-2 rounded" width="32" height="32"
                                 xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid slice"
                                 focusable="false" role="img" aria-label="Placeholder: 32x32"><title>Placeholder</title>
                                <rect width="100%" height="100%" fill="#007bff"/>
                                <text x="50%" y="50%" fill="#007bff" dy=".3em">32x32</text>
                            </svg>
                            <div className="media-body pb-3 mb-0 small lh-125 border-bottom border-gray">
                                <div className="d-flex justify-content-between align-items-center w-100">
                                    <strong className="text-gray-dark">Full Name</strong>
                                    <a href="#">Follow</a>
                                </div>
                                <span className="d-block">@username</span>
                            </div>
                        </div>
                        <small className="d-block text-right mt-3">
                            <a href="#">All suggestions</a>
                        </small>
                    </div>
                </main>
            </div>)
    }
}

export default OffCanvas
