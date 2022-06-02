import React from 'react';
import { Icon, IconProps } from '@chakra-ui/react';

const IconLogo = (props: IconProps): JSX.Element => {
    return (
        <Icon {...props} viewBox="0 0 178 61" fill={props.color}>
            <path
                d="M72.2811 38.553C71.1498 38.0458 70.3327 37.2848 69.7041 36.3337C69.0756 35.3826 68.7613 34.3046 68.6985 33.0364H71.6526C71.7154 34.1144 72.2183 35.0021 72.9725 35.6996C73.7267 36.3971 74.8581 36.7142 76.1151 36.7142C77.2465 36.7142 78.1264 36.4605 78.8178 36.0166C79.5092 35.5094 79.8863 34.8753 79.8863 33.9875C79.8863 33.3534 79.6978 32.8462 79.3207 32.4657C78.9435 32.0853 78.4407 31.8316 77.8122 31.6414C77.1837 31.4512 76.2409 31.2609 75.0466 31.0073H74.9209C73.7896 30.8171 72.7839 30.5634 71.9668 30.183C71.1498 29.8025 70.4584 29.2952 69.8927 28.5977C69.3899 27.9002 69.1385 26.9491 69.1385 25.8077C69.1385 24.7297 69.3899 23.7786 69.9555 22.9543C70.5212 22.13 71.2755 21.4959 72.2811 20.9886C73.2868 20.5447 74.4181 20.2911 75.6752 20.2911C76.9951 20.2911 78.1893 20.5447 79.1949 21.052C80.2635 21.5593 81.0805 22.1934 81.6462 23.0811C82.2747 23.9688 82.589 24.9834 82.589 26.0613H79.6349C79.5092 25.1102 79.0692 24.3493 78.3779 23.7786C77.6865 23.2079 76.7437 22.8909 75.6752 22.8909C74.6067 22.8909 73.7267 23.1445 73.0982 23.5884C72.4697 24.0322 72.1554 24.7297 72.1554 25.5541C72.1554 26.1882 72.344 26.632 72.7211 27.0125C73.0982 27.3295 73.601 27.6466 74.2296 27.8368C74.8581 28.027 75.738 28.2173 76.9322 28.4709C78.1264 28.6611 79.1321 28.9782 80.012 29.2952C80.892 29.6123 81.5834 30.183 82.149 30.8805C82.7147 31.578 82.9661 32.5291 82.9661 33.6705C82.9661 34.7485 82.6519 35.6996 82.0862 36.5873C81.5205 37.4751 80.7034 38.1092 79.6349 38.6164C78.5664 39.1237 77.4351 39.3139 76.1151 39.3139C74.6695 39.3774 73.3496 39.1237 72.2811 38.553Z"
                fill={props.color as string | undefined}
            />
            <path
                d="M95.851 26.2516C96.7938 26.8222 97.548 27.5832 98.1137 28.6611C98.6794 29.7391 98.9308 30.9439 98.9308 32.4023C98.9308 33.7973 98.6794 35.0021 98.1137 36.0166C97.548 37.0946 96.7938 37.9189 95.851 38.4896C94.9082 39.0603 93.7769 39.3773 92.5826 39.3773C91.3884 39.3773 90.3828 39.1237 89.5657 38.6164C88.7486 38.1092 88.1829 37.4116 87.743 36.5873L88.1201 35.9532V44.5769H85.2917V25.6175H87.743L88.3086 28.9782L87.6801 28.3441C88.1829 27.5198 88.8115 26.8222 89.5657 26.2516C90.3828 25.7443 91.3256 25.4906 92.5198 25.4906C93.7768 25.4272 94.8454 25.7443 95.851 26.2516ZM90.0057 28.4075C89.3771 28.7879 88.9372 29.2952 88.6229 29.9927C88.3086 30.6902 88.1201 31.4511 88.1201 32.3389C88.1201 33.2266 88.3086 34.0509 88.6229 34.7484C88.9372 35.4459 89.44 35.9532 90.0057 36.3971C90.6342 36.7775 91.2627 36.9678 92.0798 36.9678C92.8341 36.9678 93.5254 36.7775 94.154 36.3971C94.7825 36.0166 95.2225 35.4459 95.5367 34.8119C95.851 34.1143 96.0396 33.3534 96.0396 32.4657C96.0396 31.578 95.851 30.817 95.5367 30.1195C95.2225 29.422 94.7825 28.9148 94.154 28.5343C93.5254 28.1538 92.8341 27.9636 92.0798 27.9636C91.2627 27.8368 90.5713 28.027 90.0057 28.4075Z"
                fill={props.color as string | undefined}
            />
            <path
                d="M104.022 38.4896C102.953 37.9189 102.136 37.0946 101.571 36.0166C101.005 34.9387 100.691 33.7339 100.691 32.4023C100.691 31.0073 101.005 29.8025 101.571 28.7245C102.136 27.6466 102.953 26.8857 104.022 26.315C105.09 25.7443 106.285 25.4272 107.605 25.4272C108.987 25.4272 110.182 25.7443 111.187 26.315C112.256 26.8857 113.073 27.71 113.638 28.7245C114.204 29.8025 114.518 31.0073 114.518 32.4023C114.518 33.7973 114.204 35.0021 113.638 36.0801C113.073 37.158 112.256 37.9189 111.187 38.553C110.119 39.1237 108.924 39.4408 107.605 39.4408C106.222 39.3773 105.028 39.0603 104.022 38.4896ZM109.679 36.3337C110.307 35.9532 110.747 35.446 111.061 34.7485C111.376 34.0509 111.564 33.29 111.564 32.4023C111.564 31.5146 111.376 30.7537 111.061 30.0561C110.747 29.3586 110.307 28.8514 109.679 28.4709C109.05 28.0904 108.359 27.9002 107.605 27.9002C106.85 27.9002 106.096 28.0904 105.53 28.4709C104.902 28.8514 104.462 29.3586 104.148 30.0561C103.833 30.7537 103.645 31.5146 103.645 32.4023C103.645 33.29 103.833 34.0509 104.148 34.7485C104.462 35.446 104.965 35.9532 105.53 36.3337C106.159 36.7141 106.85 36.9044 107.605 36.9044C108.359 36.9044 109.113 36.7141 109.679 36.3337Z"
                fill={props.color as string | undefined}
            />
            <path
                d="M119.295 25.6175L119.798 28.9782L119.232 28.3441C119.61 27.5198 120.175 26.8223 120.804 26.3784C121.432 25.8711 122.375 25.6809 123.569 25.6809H124.198V28.3441H122.941C121.747 28.3441 120.929 28.7246 120.364 29.4855C119.861 30.2464 119.547 31.2609 119.547 32.4657V39.314H116.718V25.6175H119.295Z"
                fill={props.color as string | undefined}
            />
            <path
                d="M126.083 21.7495H128.912V25.5541H132.18V28.0271H128.912V35.1289C128.912 35.6996 129.037 36.0801 129.226 36.2703C129.415 36.5239 129.792 36.5874 130.295 36.5874H132.494V39.1237H129.729C128.472 39.1237 127.529 38.8067 126.963 38.236C126.398 37.6653 126.083 36.7142 126.083 35.446V21.7495Z"
                fill={props.color as string | undefined}
            />
            <path
                d="M137.208 38.553C136.077 38.0458 135.26 37.2848 134.631 36.3337C134.003 35.3826 133.689 34.3046 133.626 33.0364H136.58C136.643 34.1144 137.145 35.0021 137.9 35.6996C138.654 36.3971 139.785 36.7142 141.042 36.7142C142.174 36.7142 143.054 36.4605 143.745 36.0166C144.436 35.5094 144.814 34.8753 144.814 33.9875C144.814 33.3534 144.625 32.8462 144.248 32.4657C143.871 32.0853 143.368 31.8316 142.739 31.6414C142.111 31.4512 141.168 31.2609 139.974 31.0073H139.848C138.717 30.8171 137.711 30.5634 136.894 30.183C136.077 29.8025 135.386 29.2952 134.82 28.5977C134.317 27.9002 134.066 26.9491 134.066 25.8077C134.066 24.7297 134.317 23.7786 134.883 22.9543C135.448 22.13 136.203 21.4959 137.208 20.9886C138.214 20.5447 139.345 20.2911 140.602 20.2911C141.922 20.2911 143.117 20.5447 144.122 21.052C145.191 21.5593 146.008 22.1934 146.573 23.0811C147.202 23.9688 147.516 24.9834 147.516 26.0613H144.562C144.436 25.1102 143.996 24.3493 143.305 23.7786C142.614 23.2079 141.671 22.8909 140.602 22.8909C139.534 22.8909 138.654 23.1445 138.025 23.5884C137.397 24.0322 137.083 24.7297 137.083 25.5541C137.083 26.1882 137.271 26.632 137.648 27.0125C138.025 27.3295 138.528 27.6466 139.157 27.8368C139.785 28.027 140.665 28.2173 141.859 28.4709C143.054 28.6611 144.059 28.9782 144.939 29.2952C145.819 29.6123 146.511 30.183 147.076 30.8805C147.642 31.578 147.893 32.5291 147.893 33.6705C147.893 34.7485 147.579 35.6996 147.013 36.5873C146.448 37.4751 145.631 38.1092 144.562 38.6164C143.494 39.1237 142.362 39.3139 141.042 39.3139C139.597 39.3774 138.34 39.1237 137.208 38.553Z"
                fill={props.color as string | undefined}
            />
            <path
                d="M153.047 38.4896C151.979 37.9189 151.162 37.0946 150.596 36.0801C150.03 35.0021 149.716 33.7973 149.716 32.4023C149.716 31.0073 149.968 29.7391 150.533 28.7245C151.099 27.71 151.853 26.8857 152.859 26.315C153.864 25.7443 154.996 25.4272 156.316 25.4272C157.636 25.4272 158.767 25.6809 159.773 26.1882C160.778 26.6954 161.533 27.4564 162.098 28.4709C162.664 29.4855 162.978 30.6268 162.978 31.895C162.978 32.0853 162.978 32.2121 162.978 32.4023C162.978 32.5925 162.978 32.7828 162.915 32.973H152.733C152.733 33.0364 152.733 33.0364 152.733 33.0364V33.0998C152.796 33.8607 152.922 34.5582 153.236 35.1289C153.55 35.6996 153.99 36.1435 154.556 36.4605C155.121 36.7776 155.75 36.9678 156.504 36.9678C157.384 36.9678 158.138 36.7776 158.704 36.3337C159.333 35.8898 159.71 35.3191 159.898 34.5582H162.79C162.601 35.446 162.287 36.2703 161.721 36.9678C161.155 37.6653 160.464 38.236 159.647 38.6798C158.767 39.0603 157.824 39.3139 156.756 39.3139C155.31 39.3774 154.053 39.0603 153.047 38.4896ZM154.744 28.1539C154.242 28.4075 153.802 28.788 153.487 29.2952C153.173 29.8025 152.922 30.3098 152.859 30.9439H160.087C159.961 29.9293 159.584 29.105 158.956 28.5977C158.327 28.027 157.447 27.7734 156.441 27.7734C155.813 27.71 155.247 27.8368 154.744 28.1539Z"
                fill={props.color as string | undefined}
            />
            <path
                d="M168.069 38.4896C167.001 37.9189 166.184 37.0946 165.618 36.0801C165.052 35.0021 164.738 33.7973 164.738 32.4023C164.738 31.0073 164.989 29.7391 165.555 28.7245C166.121 27.71 166.875 26.8857 167.881 26.315C168.886 25.7443 170.018 25.4272 171.338 25.4272C172.658 25.4272 173.789 25.6809 174.795 26.1882C175.8 26.6954 176.554 27.4564 177.12 28.4709C177.686 29.4855 178 30.6268 178 31.895C178 32.0853 178 32.2121 178 32.4023C178 32.5925 178 32.7828 177.937 32.973H167.755C167.755 33.0364 167.755 33.0364 167.755 33.0364V33.0998C167.818 33.8607 167.944 34.5582 168.258 35.1289C168.572 35.6996 169.012 36.1435 169.578 36.4605C170.143 36.7776 170.772 36.9678 171.526 36.9678C172.406 36.9678 173.16 36.7776 173.726 36.3337C174.355 35.8898 174.732 35.3191 174.92 34.5582H177.811C177.623 35.446 177.309 36.2703 176.743 36.9678C176.177 37.6653 175.486 38.236 174.669 38.6798C173.789 39.0603 172.846 39.3139 171.778 39.3139C170.332 39.3774 169.138 39.0603 168.069 38.4896ZM169.766 28.1539C169.263 28.4075 168.823 28.788 168.509 29.2952C168.195 29.8025 167.944 30.3098 167.881 30.9439H175.109C174.983 29.9293 174.606 29.105 173.977 28.5977C173.349 28.027 172.469 27.7734 171.463 27.7734C170.835 27.71 170.269 27.8368 169.766 28.1539Z"
                fill={props.color as string | undefined}
            />
            <path
                d="M29.5982 58.7027C45.3925 58.7027 58.1963 45.7855 58.1963 29.8514C58.1963 13.9172 45.3925 1 29.5982 1C13.8038 1 1 13.9172 1 29.8514C1 45.7855 13.8038 58.7027 29.5982 58.7027Z"
                fill={props.color as string | undefined}
            />
            <path
                d="M41.9174 17.423C44.5556 17.423 46.6942 15.2654 46.6942 12.6039C46.6942 9.94239 44.5556 7.78479 41.9174 7.78479C39.2792 7.78479 37.1406 9.94239 37.1406 12.6039C37.1406 15.2654 39.2792 17.423 41.9174 17.423Z"
                fill="#020203"
            />
            <mask
                id="mask0_48_1"
                style={{ maskType: 'alpha' }}
                maskUnits="userSpaceOnUse"
                x="1"
                y="1"
                width="58"
                height="58"
            >
                <path
                    d="M29.5982 58.7027C45.3925 58.7027 58.1963 45.7855 58.1963 29.8514C58.1963 13.9172 45.3925 1 29.5982 1C13.8038 1 1 13.9172 1 29.8514C1 45.7855 13.8038 58.7027 29.5982 58.7027Z"
                    fill={props.color as string | undefined}
                />
            </mask>
            <g mask="url(#mask0_48_1)">
                <path
                    d="M40.5346 30.422C40.8489 30.9293 41.4146 31.2463 42.0431 31.2463C42.3574 31.2463 42.6716 31.1829 42.9859 30.9927L51.5968 25.7931C52.4767 25.2858 52.7281 24.1445 52.2253 23.3201C51.7225 22.4324 50.5911 22.1788 49.774 22.686L42.6088 26.9979L39.1519 20.2131C38.2091 19.2619 37.1406 18.3108 36.0721 17.4865L25.827 12.2869C25.1356 11.9698 24.3814 12.0332 23.8157 12.5405L15.2677 20.3399C14.5134 21.0374 14.4506 22.1788 15.142 22.8763C15.8334 23.6372 16.9647 23.7006 17.6561 23.0031L25.387 16.028L30.7295 18.7546L21.553 33.0852L0.622904 58.0686C-0.194187 59.0197 -0.131334 60.5415 0.874316 61.3659C1.81711 62.1902 3.32559 62.1268 4.14268 61.1122L24.4442 37.4605L33.1808 39.4896L27.2098 48.9376C26.5812 50.079 26.9584 51.474 28.0897 52.1081C29.0954 52.6788 30.4153 52.4251 31.1067 51.4106L38.7747 39.1725C39.2147 38.5384 39.2776 37.7141 39.0261 37.0166C38.7119 36.3191 38.1462 35.8118 37.392 35.685L30.6667 34.0998L36.7634 24.4615L40.5346 30.422Z"
                    fill="#020203"
                />
            </g>
        </Icon>
    );
};

export default IconLogo;
