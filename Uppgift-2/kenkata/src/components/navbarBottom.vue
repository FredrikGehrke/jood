<template>
    <div class="container">
        <nav class="navbar navbar-expand-lg navbar-light p-0">
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>
            <div class="collapse navbar-collapse" id="navbarNavDropdown">
                <ul class="navbar-nav">
                    <button id="BrowseBtn" class="btn nav-item dropdown my-blue">
                        <a class="nav-link white" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        <i class="fas fa-bars white mr-1"></i>Browse Categories <i class="fas fa-chevron-down smaller marginBrowse white"></i>
                        </a>
                        <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                        <a class="dropdown-item" href="#">Action</a>
                        <a class="dropdown-item" href="#">Another action</a>
                        <div class="dropdown-divider"></div>
                        <a class="dropdown-item" href="#">Something else here</a>
                        </div>
                    </button>
                <li class="nav-item active margin-menu-items">
                    <router-link class="nav-link" to="/">Home</router-link>
                </li>
                <li class="nav-item margin-menu-items">
                    <a class="" href="/Shop">
                        <div class="dropdown nav-link">
                            <a id="categoriesDropdown" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                Shop <i class="fas fa-chevron-down smaller margin-link"></i>
                            </a>
                            <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                                <a class="dropdown-item ml-3" href="/Shop">Show products</a>
                            </div>
                        </div>
                    </a>
                </li>
                <li class="nav-item margin-menu-items">
                        <a class="" href="/Products">
                            <div class="dropdown nav-link">
                                <a id="categoriesDropdown" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                    Products <i class="fas fa-chevron-down smaller margin-link"></i>
                                </a>
                                <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                                    <a class="dropdown-item ml-3" href="/Products">Product</a>
                                </div>
                            </div>
                        </a>
                    </li>
                    <li class="nav-item margin-menu-items">
                        <a class="" href="/Categories">
                            <div class="dropdown nav-link">
                                <a id="categoriesDropdown" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                    Categories <i class="fas fa-chevron-down smaller margin-link"></i>
                                </a>
                                <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                                    <a class="dropdown-item" href="#">Action</a>
                                    <a class="dropdown-item" href="#">Another action</a>
                                    <a class="dropdown-item" href="#">Something else here</a>
                                </div>
                            </div>
                        </a>
                    </li>
                    <li class="nav-item margin-menu-items">
                        <a class="" href="/Pages">
                            <div class="dropdown nav-link">
                                <a id="categoriesDropdown" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                    Pages <i class="fas fa-chevron-down smaller margin-link"></i>
                                </a>
                                <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                                    <a class="dropdown-item" href="#">Action</a>
                                    <a class="dropdown-item" href="#">Another action</a>
                                    <a class="dropdown-item" href="#">Something else here</a>
                                </div>
                            </div>
                        </a>
                    </li>
                    <li class="nav-item margin-menu-items">
                        <router-link class="nav-link" to="/">Blog</router-link>
                    </li>

                    
                </ul>

                
            </div>
            <div class="">
                <button class="btn my-blue special-btn white" type="submit">SPECIAL OFFER</button>
            </div>
        </nav>

    </div>
</template>

<script>

</script>

<style scoped>

.dropdown-item:hover {
    background: none;
    color: var(--ownBlue)
}

.special-btn {
    border-radius: 20px;
    font-size: 14px;
    font-weight: 600;
    padding-left: 18px;
    padding-right: 18px;
}
.special-btn:hover {
    background-color:  var(--btnHover)!important;
}

a {
    text-decoration: none !important;
}
i {
    color: var(--ownBlue)
}

.nav-link {
    padding-bottom: 5px;
    color: #313131 !important;
    font-weight: 500;
}
.nav-link:hover {
    color: var(--ownBlue) !important;
}

#BrowseBtn {
    padding: 0.1rem;
    border-radius: 0;
} a {
    padding-left: 0rem !important;
} i {
    padding-left: 1.2px;
}
#BrowseBtn:hover {
    background-color:  var(--btnHover)!important;
}

.margin {
    margin-left: 0rem !important;
}
.marginBrowse {
    margin-left: 3rem !important;
}
.margin-link {
    margin-left: 0.2rem !important;
}

.white {
    color: white !important; 
}

.nav-item:hover {
    text-decoration: none;
}

.active {
    position: relative;
}

.active::after {
    content: "";
    display: block;
    position: absolute;
    bottom: 0.1rem;
    left: 0px;
    height: 4px;
    width: 45px;
    background-color: var(--ownBlue);
}

@media (min-width: 576px) { 

}

@media (min-width: 768px) { 

}

@media (min-width: 992px) { 

    .margin-menu-items {
        margin-left: 1rem;
    }

    .active::after {
        left: 0px;
        height: 4px;
        width: 85%;
    }
}

@media (min-width: 1200px) { 

}

</style>