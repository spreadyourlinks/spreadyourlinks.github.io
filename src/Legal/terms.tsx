import {ADDITIONAL_SERVICES, WEBSITE_NAME, WEBSITE_URL} from "../other/variables";

export default function TermsAndConditions() {
    return (
        <div className="AccordionDetails-text">
            <h2><strong>Terms and Conditions</strong></h2>

            <p>Welcome to {WEBSITE_NAME}!</p>

            <p>These terms and conditions outline the rules and regulations for the use of {WEBSITE_NAME}'s Website,
                located at {WEBSITE_URL()}.</p>

            <p>By accessing this website we assume you accept these terms and conditions. Do not continue to
                use {WEBSITE_NAME} if you do not agree to take all of the terms and conditions stated on this page.</p>

            <p>The following terminology applies to these Terms and Conditions, Privacy Statement and Disclaimer Notice
                and all Agreements: "Client", "You" and "Your" refers to you, the person log on this website and
                compliant to the Company’s terms and conditions. "The Company", "Ourselves", "We", "Our" and "Us",
                refers to our Company. "Party", "Parties", or "Us", refers to both the Client and ourselves. All terms
                refer to the offer, acceptance and consideration of payment necessary to undertake the process of our
                assistance to the Client in the most appropriate manner for the express purpose of meeting the Client’s
                needs in respect of provision of the Company’s stated services, in accordance with and subject to,
                prevailing law of Netherlands. Any use of the above terminology or other words in the singular, plural,
                capitalization and/or he/she or they, are taken as interchangeable and therefore as referring to
                same.</p>

            <h3><strong>Cookies</strong></h3>

            <p>We employ the use of cookies. By accessing {WEBSITE_NAME}, you agreed to use cookies in agreement with
                the {WEBSITE_NAME}'s Privacy Policy. </p>

            <p>Most interactive websites use cookies to let us retrieve the user’s details for each visit. Cookies are
                used by our website to enable the functionality of certain areas to make it easier for people visiting
                our website. Some of our affiliate/advertising partners may also use cookies.</p>

            <h3><strong>License</strong></h3>

            <p>Unless otherwise stated, {WEBSITE_NAME} and/or its licensors own the intellectual property rights for all
                material on {WEBSITE_NAME}. All intellectual property rights are reserved. You may access this
                from {WEBSITE_NAME} for your own personal use subjected to restrictions set in these terms and
                conditions.</p>

            <p>You must not:</p>
            <ul>
                <li>Republish material from {WEBSITE_NAME}</li>
                <li>Sell, rent or sub-license material from {WEBSITE_NAME}</li>
                <li>Redistribute content from {WEBSITE_NAME}</li>
            </ul>

            <p>Some code behind {WEBSITE_NAME} may be published on it's git repository and it's usage is restricted by
                it's own appropriate license.</p>

            <p>This Agreement shall begin on the date hereof.</p>

            <p>You warrant and represent that:</p>

            <ul>
                <li>You are entitled to submit the links to our website and have all necessary licenses and consents to
                    do so;
                </li>
                <li>The links do not invade any intellectual property right, including without limitation copyright,
                    patent or trademark of any third party;
                </li>
                <li>The links do not contain any defamatory, libelous, offensive, indecent or otherwise unlawful
                    material which is an invasion of privacy
                </li>
                <li>The link will not be used to solicit or promote business or custom or present commercial activities
                    or unlawful activity.
                </li>
                <li>The link will do not contain any unlawful material.</li>
            </ul>

            <h3><strong>iFrames</strong></h3>

            <p>Without prior approval and written permission, you may not create frames around our Webpages that alter
                in any way the visual presentation or appearance of our Website.</p>

            <h3><strong>Content Liability</strong></h3>

            <p>We shall not be hold responsible for any content that appears on your Website. You agree to protect and
                defend us against all claims that is rising on your Website. No link(s) should appear on any Website
                that may be interpreted as libelous, obscene or criminal, or which infringes, otherwise violates, or
                advocates the infringement or other violation of, any third party rights.</p>

            <h3><strong>Your Privacy</strong></h3>

            <p>Please read Privacy Policy</p>

            <h3><strong>Reservation of Rights</strong></h3>

            <p>We reserve the right to remove any and all content to submitted to our Website. We also reserve the right
                to amen these terms and conditions and it’s linking policy at any time. By continuously linking to, or
                using our Website, you agree to be bound to and follow these linking terms and conditions.</p>

            <h3><strong>Removal of links from our website</strong></h3>

            <p>If you find any link on our Website that is offensive for any reason, you are free to contact and inform
                us any moment. We will consider requests to remove links but we are not obligated to or so or to respond
                to you directly.</p>

            <p>We do not ensure that the information on this website is correct, we do not warrant its completeness or
                accuracy; nor do we promise to ensure that the website remains available or that the material on the
                website is kept up to date.</p>

            <h3><strong>Disclaimer</strong></h3>

            <p>To the maximum extent permitted by applicable law, we exclude all representations, warranties and
                conditions relating to our website and the use of this website. Nothing in this disclaimer will:</p>

            <ul>
                <li>limit or exclude our or your liability for death or personal injury;</li>
                <li>limit or exclude our or your liability for fraud or fraudulent misrepresentation;</li>
                <li>limit any of our or your liabilities in any way that is not permitted under applicable law; or</li>
                <li>exclude any of our or your liabilities that may not be excluded under applicable law.</li>
            </ul>

            <p>The limitations and prohibitions of liability set in this Section and elsewhere in this disclaimer: (a)
                are subject to the preceding paragraph; and (b) govern all liabilities arising under the disclaimer,
                including liabilities arising in contract, in tort and for breach of statutory duty.</p>

            <p>As long as the website and the information and services on the website are provided free of charge, we
                will not be liable for any loss or damage of any nature.</p>

            <h1>Other providers</h1>
            <p>We use third-party tools and services to operator and track the usage of this Service. By using this
                service you also agree to their respective Terms and Conditions. Some of these tools and services
                include, but not limited to, {ADDITIONAL_SERVICES}.</p>

            <p>Our Terms and Conditions were created with the help of the <a className="link-changed"
                                                                             href="https://www.termsfeed.com/terms-conditions-generator/">TermsFeed
                Free Terms and Conditions Generator</a>.</p>
        </div>
    )
}
