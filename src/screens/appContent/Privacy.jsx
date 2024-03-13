import { View, Text, ScrollView } from "react-native";
import React from "react";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import { Appbar, Menu } from "react-native-paper";
import { LightTheme } from "../../themes/LightTheme";

export default function Privacy({ navigation }) {
  return (
    <>
      <Appbar.Header>
        <FontAwesome
          name={"chevron-left"}
          color={LightTheme.light.HeaderText}
          size={20}
          style={{ marginRight: 20, marginLeft: 10 }}
          onPress={() => navigation.navigate("profilePage")}
        />
        <Appbar.Content
          title="Privacy Policy"
          titleStyle={{
            color: LightTheme.light.HeaderText,
            fontFamily: LightTheme.light.fontRegular,
            fontSize: 18,
          }}
        />
      </Appbar.Header>
      <ScrollView style={{ backgroundColor: "#EFFBFF" }}>
        <View style={{ margin: 20 }}>
          <Text style={{ fontFamily: LightTheme.light.fontRegular }}>
            Home/Privacy Policy Ayuci Health-Tech Private Limited provides
            secure online, easy-to-use access to personal health records
            enabling its users and their families to maintain their medical
            records and other important documents, such as birth certificates,
            insurance policies in one secure, central location and instantly
            access them anytime, anywhere using the Internet. Ayuci Health-Tech
            Private Limited offers this website, including all information,
            software, products, mobile applications and services available from
            this website or offered as part of or in conjunction with this
            website (collectively “the Website”) to you (“the User”) conditioned
            upon your acceptance of all of the terms, conditions, policies and
            notices stated here. Your continued use of the Website constitutes
            your agreement to all such terms, conditions and notices, and any
            changes to the Terms of Use made by Samarth Meditech. If you are
            unwilling to be bound by these Terms of Use, please do not access
            the Website and/or use Samarth Meditech’s Services. These “Terms of
            Use” and all other policies on the Website, including but not
            limited to the terms consented to during the Registration Process,
            (collectively “Agreement”) constitute a binding agreement between
            you and Samarth Meditech, and is accepted by you upon your use of
            the Website. II. Definitions “Account” is the account successfully
            opened by the User on the Website based on information as required
            to be entered during the registration process, and includes any
            further changes to the information made by the User from time to
            time. “Customer” is any User that has completed the Registration
            Process and avails the Services of Samarth Meditech. “Samarth
            Meditech” is Ayuci Health-Tech Pvt. Ltd., its assignees,
            successors-in-interest, its franchisees or any other such person or
            entity authorized in writing to operate on and on behalf of the
            company. “Fee” is the price prescribed by Ayuci for the Services as
            notified on its Website from time to time. “Record” is any
            information or document shared and uploaded by the User/Customer on
            the Website including but not limited to personal health records,
            birth certificates, and insurance policies. “Registration Process”
            is the series of steps which a User must complete to register an
            Account on the Website, including but not limited to acceptance of
            the Terms of Use mentioned on the Website. “Service” is the
            collectively the various services offered by Ayuci as enumerated in
            Section IV of the Terms of Use, and any such other packages which
            Ayuci may be introduced from time to time through the Website.
            “User” is any person who accesses the Website. III. Interpretation
            In the Terms of Use, unless specified otherwise or repugnant in
            context: 1. headings are inserted for ease of reference only and do
            not define or limit any of the provisions of the Terms of Use; 2.
            sections, recitals, clauses and sub-clauses are to sections,
            recitals, clauses and sub-clauses of the Terms of Use. 3. references
            to any term in the singular shall include references to the plural
            number and vice versa; 4. words denoting one gender include all
            genders; and 5. any reference in the Terms of Use to a statutory
            provision automatically includes any regulation made in pursuance
            thereof, amendment and re-enactment, whether before or after the
            date of the Terms of Use. IV. Eligibility By using the Website
            and/or the Services, you represent and warrant that you have the
            requisite right, authority, and capacity to enter into these Terms
            of Use and to abide by all of the terms and conditions set forth
            herein. You also represent and warrant to Ayuci that you will use
            Website in accordance with and consistent with any and all
            applicable laws and regulations. You, the User must be an Indian
            citizen, 18 years or older, or the legal age to form a binding
            contract in the jurisdiction of your residence, if such age is
            greater than 18 years of age, to become a Customer and to use
            Samarth Meditech’s Services. Membership or use of this Website is
            void where prohibited by applicable law, and the right to access the
            Website will be deemed to be revoked in such jurisdictions ab
            initio. You, the User, understand and state that you have all rights
            and permissions as per the prevailing Indian laws to possess, share
            and disseminate Records on the Website. You, the User, understand
            and acknowledge that you are solely responsible for the accuracy,
            integrity and completeness of your Records. V. Services 1. The use
            of this Website entitles the Customer to avail certain services as
            provided in the following sections (“Services”) and interpretation
            of the term “Services” shall be according to the context. 2. Ayuci
            offers its Customers the following Services: a. a secure Website for
            the User to share and upload Records, and search, retrieve and share
            such uploaded Records; b. the facility of sharing their documents
            with Ayuci through their registered email address, and allowing them
            to be uploaded by Ayuci for use as specified in Section IV.2.a; c. a
            Website which enables Customers to track their vital health
            parameters, set reminders and make brief notes based on their
            Records; d. the optional facility to contact Ayuci personnel or
            specified third-party service providers to pick up a Customer’s
            Records to a well-defined physical location to be uploaded by Ayuci
            personnel for use as specified in Section IV.2.a; e. the optional
            facility to contact Ayuci personnel or specified third-party service
            providers to scan a Customer’s Records at a well-defined physical
            location to be uploaded by Ayuci personnel for use as specified in
            Section IV.2.a; f. the optional facility to contact Ayuci personnel
            or specified third-party service providers to download specified
            Records on to a device, including but not limited to a CD or a flash
            drive, and to request that such device be sent to a well-defined
            physical location; g. the optional facility to courier documents to
            a well-defined specified physical address to Ayuci personnel or
            specified third-party service providers to scan and upload such
            documents and create Records on the Website on behalf of the
            Customer for use as specified in Section IV.2.a. 3. The Service(s)
            mentioned in the Agreement, and any other services proposed to be
            added to such repertoire from time-to-time may be offered to Users
            and Customers for a Fee. 4. Users are only entitled to the following
            activities on the Website: a. Viewing publicly-accessible
            information on the Website including information about Samarth
            Meditech, and the description of the various Services offered by
            Samarth Meditech. b. Providing feedback and write to Samarth
            Meditech’s customer care personnel from the Website. c. Beginning
            the Registration Process to become a Customer; d. Opting to receive
            updates via email/app notifications/text message/phone calls/letters
            upon providing contact information to Ayuci to be routinely informed
            of Samarth Meditech’s Services. e. Accessing Samarth Meditech’s
            periodically updated blog on personal health and healthcare, and
            which may introduce Samarth Meditech’s latest Services, tips and
            guidance on how Customers can maximize their experience of the
            Services and how Users may make use of the Website, and other
            related information. 5. Unless specifically agreed upon by the
            Samarth Meditech, the Services provided to the Customer are
            non-transferable and only the person on whose name the Services are
            booked can avail of such Services. 6. The Customer is required to
            carry photo-identification document if it is availing any Services
            which requires a physical interaction with Ayuci personnel to verify
            the identity of the Customer. VI. Restrictions on Use 1.
            Users/Customers shall not use the Website in order to transmit,
            distribute, store or destroy material, including without limitation
            content provided by Samarth Meditech: a. for any unlawful purpose or
            in violation of any applicable law, regulation, international law or
            laws of any other country; or b. in a manner that will infringe the
            intellectual property rights, publicity, privacy or confidentiality
            of others or other personal rights of others, or c. that is
            defamatory, slanderous, libellous, obscene, threatening, abusive or
            is offensive to Users of the Website, such as content or messages
            that promotes racism, bigotry, hatred or physical harm of any kind
            against any group or individual; or d. that is false or misleading;
            or e. that harasses or advocates harassment of another person. 2.
            Users/Customers are also prohibited from violating or attempting to
            violate the security of the Website, including, without limitation
            the following activities: (a) accessing data not intended for you or
            logging into a server or account which you are not authorized to
            access; (b) attempting to probe, scan or test the vulnerability of a
            system or network or to breach security or authentication measures
            without proper authorization; (c) attempting to interfere with
            service to any User, host or network, including, without limitation,
            via means of submitting a virus to Website, overloading, “flooding”,
            “spamming”, “mail bombing”, “hacking” or “crashing”; or (d) forging
            any TCP/IP packet header or any part of the header information in
            any e-mail or newsgroup posting. 3. Violations of system or network
            security may result in civil or criminal liability. 4. In addition
            to the above, Users/Customers shall not use the Website or Samarth
            Meditech’s Services to: a. modify, adapt, translate, or reverse
            engineer any portion of the Website and/or Services; b. reformat or
            frame any portion of the web pages that are part of the Website
            and/or Service; c. remove any intellectual property rights,
            copyright, trademark or other proprietary rights notices contained
            in or on the Website and/or Service; d. create User accounts by
            automated means or under false or fraudulent pretence; e. create or
            transmit unwanted electronic communications such as “spam” to other
            Users/Customers of the Website and/or Service or otherwise interfere
            with other User’s or User’s enjoyment of the Website and/or Service;
            f. use any crawler, robot, spider, site search/retrieval
            application, or other device to retrieve or index any portion of the
            Website and/or Service or for crawling the Website and scraping
            content or to circumvent the technological methods adopted by the
            Website to prevent such prohibited use; g. submit any content or
            material that falsely express or imply that such content or material
            is sponsored or endorsed by Ayuci or the Website; h. copy or store
            any content offered on the Website for other than your own use; i.
            transmit any viruses, worms, defects, Trojan horses or other items
            of a destructive nature; j. make use of the Website or Services to
            violate the security of any computer network, crack passwords or
            security encryption codes, transfer or store illegal material
            including that are deemed threatening or obscene; k. take any action
            that imposes, or may impose in our sole discretion, an unreasonable
            or disproportionately large load on Samarth Meditech’s IT
            infrastructure. VII. Remedies with Samarth Meditech 1.
            Users/Customers understand and agree that Ayuci has the requisite
            authority to review any content on the Website including Records for
            the purposes specified in the Agreement displayed on the Website and
            agreed upon and to determine whether Users/Customers are adhering to
            the policies and terms and conditions defined in the Agreement. 2.
            If Ayuci determines, in its sole discretion, that the User or
            Customer has violated any terms of the Agreement, Ayuci reserves the
            right to take actions to prevent/control such violation including
            without limitation, removing the offending communication or content
            from the Website and/or terminating the membership of such violators
            and/or blocking their use of the Website and/or Service. Such the
            reserves the right, without notice and in its sole discretion, to
            terminate a User’s/Customer’s license to use the Website and/or
            Services, and/or to block or prevent future access to and use of the
            Website or Services, and/or initiate appropriate legal action. 3.
            The Company shall also be entitled to investigate occurrences which
            may involve such violations and may and take appropriate legal
            action, involve and cooperate with law enforcement authorities in
            prosecuting Users/Customers who are involved in such violations.
            VIII. Registration Process 1. A User must complete the Registration
            Process as provided below to become a Customer and to avail the
            Samarth Meditech’s Services: a. The User must register with Ayuci
            using an email address as a login id and create a secure password as
            required by the internal security policies of the Website. b.
            Registration is a pre-requisite for Users to create an Account and
            entails the provision of inter alia the following basic details such
            as full name, date of birth, sex, email address, city, zip/postal
            code and phone number. c. The Registration Process is complete only
            after the User agrees to be bound by the Agreement, including but
            not limited to the Terms of Use and consents to allow Ayuci access
            to Records, documents and information for limited purposes as
            defined in the Agreement. 2. Only after completing the Registration
            Process, the Users become Customers and become entitled to avail the
            Services, subject to payment of the Fee if required. 3. The Website
            may provide the facility of “masking” which allows Customers to hide
            or keep confidential or not to fill any information except the
            information which are considered mandatory by Ayuci and which will
            indicated by asterisks (“*”). Ayuci further reserves the right to
            seek further information if in its sole view such information is
            necessary for the provision of Services or completeness of its
            records or mandated by any applicable laws or regulations. 4. The
            Users understand and agree that Ayuci may screen and verify the
            information provided by the User or Customer and at its sole
            discretion, and modify the information requested during or form for
            the Registration Process and may ask for further information even
            after Registration Process. Ayuci may in its sole discretion, close
            the Account, if any information provided is found to be false,
            incomplete or the information provided is insufficient. IX. Payment
            of Fee 1. Ayuci shall endeavour to provide its Users and Customers
            with facilities/gateways to pay the Fee through credit cards
            (American Express, Visa and MasterCard), debit cards (Visa and
            MasterCard), cash cards, cash and internet banking. 2. Where the
            payment of Fee is through the Internet, it is understood and agreed
            by the User/Customer that the provision of Services shall only
            commence after the Fee has been successfully transferred to Samarth
            Meditech’s bank account. 3. It is understood and agreed by the
            User/Customer that payment mechanisms may be governed by
            separate/additional terms of use prescribed by Ayuci and may entail
            inter alia service charges, taxes, cess, handling fee over and above
            the Fee specified by Samarth Meditech. 4. Ayuci reserves the right
            to charge listing fees for certain listings, as well as transaction
            fees based on certain completed transactions using the Services
            through the Website or any other fee. The Company further reserves
            the right to alter any and all fees from time to time, without
            notice. 5. Ayuci reserves the right to refuse or cancel any order
            placed for a Service that is listed at an incorrect price. This
            shall be regardless of whether the order has been confirmed and/or
            payment has been made by the User/Customer. In the event the payment
            has been processed by Samarth Meditech, it will be credited/refunded
            to the User’s/Customer’s bank account within a reasonable time
            period. 6. It is understood and agreed by the User/Customer that
            payment mechanisms may be governed by separate agreements between
            the third parties who provide facilities for such payment mechanism
            and Samarth Meditech. 7. It is understood and agreed by the
            User/Customer that in no event whatsoever, Ayuci shall take any
            responsibility or liability for malfunctioning or defect in any
            payment procedure. Payment of the Fee shall be the sole
            responsibility of the User/Customer. 8. The User/Customer may be
            liable to pay all applicable charges, fees, duties, taxes, levies
            and assessments for availing the Services through the Website.
            Further, Ayuci reserves the right to change the Fee upon its sole
            discretion without any prior notice to the User/Customer. X. Refund
            and Cancellation Policy 1. If the Customer wishes to cancel/modify
            any Services requested, it may do so 48 hours in advance of the
            commencement of provision of such Services, subject to
            cancellation/modification charges as prescribed by Samarth Meditech.
            The User/Customer can contact Ayuci through e-mail id
            care@samarthmeditech.com for any information about and to seek any
            cancellation and refund. 2. After such period as described in the
            Terms of Use, the User shall not be entitled to claim any refund for
            Services and Ayuci shall have the right to forfeit the fees already
            paid in such a case. 3. Ayuci will have the sole discretion to
            approve any request by a User/Customer for a refund and the mode of
            such refund of fees. 4. Ayuci is not responsible or liable for the
            delay or cancellation of its Services where: (a) there is a delayed
            receipt of Fee through the third-party payment gateway made
            available on the Website, (b) if the payment of Fee is refused or
            declined by the Customer’s bank for any reason, (c) the transaction
            has failed or has been declined for any reason whatsoever. 5. In all
            cases where a request for cancellation of a Service has been
            approved by Samarth Meditech, and the Service has been made
            available upon payment of a Fee, Ayuci will retain 20% of such Fee
            as a cancellation fee. Ayuci reserves the right to change the
            cancellation fee upon its sole discretion without any prior notice
            to the User/Customer. 6. The refund (if approved by Samarth
            Meditech) will be processed within 15 business days from the date of
            approval. XI. Modification of Terms of Use You understand and agree
            that the Agreement, including the Terms of Use, the Website and the
            Services can be modified by Ayuci at its sole discretion, at any
            time without prior notice, and such modifications will be effective
            upon such new terms and/or upon implementation of the new changes on
            the Website. You agree to review the Terms of Use periodically so
            that you are aware of any such modifications and Ayuci shall not be
            liable for any loss suffered by you on your failure to review such
            modified Terms of Use. Unless expressly stated otherwise, any new
            features, new services, enhancements or modifications to the Website
            or Service implemented after your initial access of Website or use
            of the Service shall be subject to these Terms of Use. XII.
            Maintenance 1. Every effort is made to keep the Website up and
            running smoothly, and in accordance with all applicable laws, rules,
            standards and regulations. However, Ayuci takes no responsibility
            for, and will not be liable for, the Website being temporarily
            unavailable due to technical issues beyond its reasonable control.
            2. Further, Ayuci may at its sole discretion and without assigning
            any reason whatsoever at any time deactivate or/and suspend the
            User’s/Customer’s access to the Website and/or the Services (as the
            case may be) without giving any prior notice, to carry out system
            maintenance or/and upgrading or/and testing or/and repairs or/and
            other related work. 3. Without prejudice to any other provisions of
            the Agreement, Ayuci shall not be liable to indemnify the
            User/Customer for any loss or/and damage or/and costs or/and expense
            that the User/Customer may suffer or incur, and no fees or/and
            charges payable by the User/Customer to Ayuci shall be deducted or
            refunded or rebated, as a result of such deactivation or/and
            suspension. XIII. Term and Termination 1. The Agreement and the
            Terms of Use, with modifications as contemplated, shall remain in
            full force and effect during the use of the Website for all Users
            and will be extended to the provision of Services for Customers. 2.
            Ayuci may terminate the Agreement with immediate effect, without
            prior notice and without assigning any reason/s whatsoever and
            without any prejudice to any/all other rights in the following
            events: a. where the Account remains unused for a period of 2 years
            or more; or b. if in the opinion of Samarth Meditech, the
            User/Customer has breached any of the terms and conditions of this
            Agreement or/and the Terms of Use, or any applicable laws, rules or
            regulations; or c. if, in the opinion of Ayuci or/and any regulatory
            authority, it is not in the public interest to continue providing
            the use or Service to the User/Customer for any reason. 3.
            Notwithstanding anything contained in the Terms of Use, Sections V,
            XI, XII, XIII, XIV, XV, XVI, XVII, XVIII and XX shall survive any
            termination or expiration of these Terms of Use. XIV. Liabilities
            Upon Termination The User/Customer will not be entitled to any
            partial refund of the Fee if the Agreement is terminated under
            certain circumstances, including but not limited to Section XII of
            the Terms of Use. Ayuci shall be entitled to recover fees and any
            amounts upon such termination from the User/Customer, without
            prejudice to any other remedies available under prevailing laws. XV.
            Ownership Any material, content or logos, marks, software on or part
            of the Website and all aspects thereof, including all copyrights and
            other intellectual property or proprietary rights therein, is owned
            by Ayuci or its licensors. You acknowledge that the Website and any
            underlying technology or software on the Website or used in
            connection with rendering the Services are proprietary information
            owned or duly licensed to Samarth Meditech, except where it is
            indicated otherwise. You are prohibited to modify, reproduce,
            distribute, create derivative works of, publicly display or in any
            way exploit, any of the content, software, marks, logos, and/or
            materials available on the Website in whole or in part except as
            expressly allowed under the Terms of Use. You have no other express
            or implied rights to use, in any manner whatsoever, the content,
            software, marks, logos, and/or materials available on the Website.
            XVI. Copyright Dispute Policy If Ayuci believes in good faith any
            material on its Website has been illegally copied or is posted,
            uploaded or made accessible through the Website or Services and
            distributed by any advertisers, its affiliates, content providers,
            members or Users; it may send an infringement notice and remove and
            discontinue Services to offenders. The infringement notice sent by
            Ayuci is without prejudice to its rights to proceed against the
            offender by filing a lawsuit in the appropriate court of law on
            ground of such infringement. XVII. Disclaimer 1. While Ayuci strives
            to update and display accurate content on the Website, no
            representations or warranties of any kind, express or implied, about
            the completeness, accuracy, reliability, suitability or availability
            are made with respect to the Website or the information, products,
            Services, or related graphics contained on the Website for any
            purpose. Thus, the Website is provided by Ayuci on an “as is” basis
            the company and its licensors and affiliates make no representations
            or warranties of any kind, express, statutory or implied as to the
            operation of the Website, provision of Services or software or the
            information, content, materials, or products included on the Website
            or in association with the services. To the fullest extent
            permissible by applicable law, Ayuci disclaims all warranties,
            express, statutory, or implied, including, but not limited to,
            implied warranties of merchantability and fitness for a particular
            purpose and non-infringement. the company and its licensors and aff
            iliates further do not warrant the accuracy or completeness of the
            information, text, graphics, links or other items contained within
            the Website. Ayuci is not responsible for the conduct, of any User
            or Customer. Ayuci does not warrant or covenant that the services
            will be available at any time or from any particular location, will
            be secure or error-free, that defects will be corrected, or that the
            services and access to the Website is free of viruses or other
            potentially harmful components. Any material or content downloaded
            or otherwise obtained through the use of the services or the Website
            is accessed at your own discretion and risk and you will be solely
            responsible for any damage to your computer system or loss of data
            that results from the download of any such material. No advice or
            information, whether oral or written, obtained by any User from the
            company, the Website or through or from the services, the
            information, content, materials, or products on the Website shall
            create any warr anty not expressly stated herein. 2. All the
            contents of this Website are only for general information or use.
            The contents of the Website, including Samarth Meditech’s blog, are
            for informational purposes only. No information on the Website is
            intended as a substitute for professional medical advice, diagnosis,
            or treatment. Ayuci does not recommend or endorse any specific
            tests, doctors, hospitals, products, procedures, opinions, or other
            information that may be mentioned on the Website, and categorically
            states that any such reliance by a User or Customer is solely at
            their own risk. Ayuci always recommends that Users and Customers
            seek the advice of a doctor or other qualified healthcare providers
            with any questions you may have regarding a medical condition. 3.
            Ayuci has a periodically updated blog, and may also introduce
            several fora for Customers and Users with similar interests or
            questions can share information and support one another. Any
            information, including but not limited to Confidential Information,
            Records, and sensitive information, shared by a User or Customer on
            any online community area is solely at their risk, may also show up
            in third party searches, and is not private. If such information has
            been inadvertently posted on such blogs or public fora on the
            Website, and a User or Customer would like it removed, write to us
            at care@samarthmeditech.com. Please note that there may be some
            limited circumstances under which Ayuci will not be able to remove
            your information. 4. Ayuci does not have any control over
            third-party links which are displayed on the Website and is
            therefore not responsible for the protection and privacy of your
            information on these third-party websites. The inclusion of any
            third-party links, unless specifically stated, does not imply a
            recommendation or endorsement of the views expressed within them. 5.
            Since Ayuci acts only as a service portal for the Users/Customers,
            it shall not have any liability whatsoever for any aspect of the
            payment between the third party and the Customer/User. 6. Ayuci
            maintains its Website and all privacy and security procedures and
            protocols in accordance with applicable laws, rules, regulations and
            standards. In no event, shall Ayuci be liable for any direct,
            indirect, punitive, incidental, special, consequential damages or
            any other damages resulting from: (a) the use or the inability to
            use the services; (b) unauthorized access to or alteration of the
            User’s transmissions or data; (c) any other matter relating to the
            services; including, without limitation, damages for any loss
            whatsoever arising out of or in any way connected with the use or
            performance of the Website. 7. Ayuci is not responsible for the
            delay or inability to use the Website or related Services, the
            provision of or failure to provide Services, or for any information,
            software, products, services and related graphics obtained through
            the Website, or otherwise arising out of the use of the Website,
            whether based on technical issues, contract, tort, negligence,
            strict liability or otherwise. The User/Customer understands and
            agrees that any material and/or data downloaded or otherwise
            obtained through the Website is done entirely at their own
            discretion and risk and they will be solely responsible for any
            damage to their computer systems or loss of data that results from
            the download of such material and/or data. 8. These limitations,
            disclaimer of warranties and exclusions apply without regard to
            whether the damages arise from (a) breach of contract, (b) breach of
            warranty, (c) negligence, or (d) any other cause of action, to the
            extent such exclusion and limitations are not prohibited by
            applicable laws. XVIII. Limitation on Liability Ayuci is not liable
            for any failure to perform its obligations hereunder where such
            failure results from acts of independent contractors or consultants
            acting on a part of any cause beyond the company’s reasonable
            control including—without limitation—mechanical, technical,
            electronic or communications failure, delays or degradation
            (including “line-noise” interference). Ayuci is also not responsible
            for a delay or cancellation of its Services or any other incident
            that may occur during the payment of Fees made through third-party
            payment gateways made available on the Website. The use of such
            payment gateways are governed by separate policies and terms of use
            and Customers are deemed to have read and understood such policies
            and terms before the payment of any Fee. Without prejudice to the
            aforesaid, Samarth Meditech, its authorized consultants and
            suppliers will not be liable under any law, for any indirect,
            incidental, punitive, and consequential damages, including, but not
            limited to los s of profits, service interruption, and/or loss of
            information or data. XIX. Indemnity You agree to indemnify and hold
            Samarth Meditech, its parents, subsidiaries, affiliates, officers
            and employees, harmless, including costs and attorneys’ fees, from
            any claim or demand made by any third party due to or arising out of
            (i) your access to the Website, (ii) your use of the Services, (iii)
            the violation of these Terms of Use by You, or (iv) the infringement
            by You, or any third party using Your account or User ID or
            password, of any intellectual property or other right of any person
            or entity. XX. Privacy 1. Samarth Meditech’s use and transfer to any
            other app of information received from Google APIs will adhere to
            Google API Services User Data Policy, including the Limited Use
            requirements. 2. To create an Account and in some other
            circumstances, Ayuci may require information provided by the
            User/Customer. Ayuci is committed to ensuring that the
            User’s/Customer’s privacy is protected. Any information sought and
            provided in these circumstances on the Website will only be used in
            accordance with the Agreement and applicable laws, rules,
            regulations and standards. 3. Ayuci has already put in place
            procedures in accordance with legal and industry standards to
            safeguard and secure a User’s/Customer’s sensitive and Confidential
            Information. Ayuci currently runs, checks and tests its Website to
            ensure that it is not prone to any attacks from known viruses,
            malware, bloatware, trojans and spyware. However, it is strongly
            recommended that any User/Customer on the Website runs its own
            antivirus program when it accesses the Website or downloads any
            content from it. 4. Ayuci is not responsible for and accepts no
            liability for any damage to a User’s/Customer’s computer system or
            loss of data caused by using the Website or claimed to be arising as
            a result of having used the Website. 5. Ayuci requires this
            information to understand a User’s/Customer’s needs and customize
            the Website according to them, improve its products and service and
            for other reasons such as data analytics, internal record keeping,
            to periodically send promotional emails and/or notifications about
            new products, special offers or other information, market research
            purposes and the creation of an aggregate, anonymized database.
            Users/Customers specifically consent to and understand that, during
            or after their use of the Services, Ayuci has your permission to use
            their information as a part of the aggregate, anonymized database as
            allowed under prevailing Indian laws and that Ayuci may gain
            monetarily from such distribution. 6. Ayuci may contact a
            User/Customer by email, notifications, phone, fax or mail in
            furtherance of any of the terms of the Agreement and inter alia to
            customise the Website according to their interests. 7. Where a
            User/Customer believes that such information is not necessary for
            the provision of Services, the User/Customer may request control the
            collection or use of your personal information by indicating (where
            available) that they do not want the information for marketing
            purposes. The User/Customer can also write to Ayuci at
            care@samarthmeditech.com, where no such option is available, to
            revoke any such permission previously given to Ayuci about use of
            such information, which request may be considered by Ayuci as long
            as it does not affect the provision of Services. 8. Ayuci will not
            share, sell, distribute or lease a User’s/Customer’s personal
            information to third parties unless Ayuci has their specific
            permission or is required by law to do so. In circumstances where
            Ayuci is undergoing a reorganization, transfer of its business or
            assets through sale, merger or acquisition for business reasons,
            such personal information and Records may form a part of such
            transferred business assets. However, Records, Confidential
            Information and any other sensitive data provided continues to be
            governed by the Agreement, which includes the Terms of Use and all
            policies displayed on the Website and agreed upon by you. In the
            event that the Terms of Use and policies displayed on the Website
            and agreed upon by you are changed during the process of transfer of
            business assets, Ayuci will make all efforts to ensure that the
            Records, Confidential Information and sensitive data will be
            adequately protected as per prevailing laws and Ayuci (which
            includes its successors-in-interest) will obtain a User’s/Customer’s
            consent on the new Terms of Use, privacy policies and any other
            policies which will govern the use of the Services. 9. Ayuci has
            systems and personnel to analyze content shared and uploaded by
            Users and Customers on the Website. This analysis occurs as Records
            are shared, uploaded, received, and when it is stored on the
            Website, and is permissible under prevailing laws. Analysing the
            content helps Ayuci improve and tailor its Services and Website for
            you, create an aggregate and anonymized database, and allows it to
            develop new Services which are relevant to your needs. Additionally,
            the Website may ask for permission to store cookies on a
            User’s/Customer’s computer. Cookies are only stored for statistical
            analysis purposes. These cookies helps analyse web traffic and help
            improve Services by allowing customizations of the Website to the
            User’s/Customer’s preferences. A cookie in no way gives access to a
            computer or any additional information, other than the data shared
            by the User/Customer. Access to cookies can be denied during the
            installation of the cookies by modifying the settings on a web brows
            er, however this may prevent Users and Customers from taking full
            advantage of the Website. 10. Ayuci reserves the right to maintain
            records of the account history of its Customers, including without
            limitation all billing information and payment history, where
            applicable, and communications. Ayuci will maintain these records on
            its secure servers in an encrypted form. However, your transactions
            details where Services are rendered upon the payment of a Fee may be
            preserved by Ayuci for purposes of tax or regulatory compliance as
            per applicable laws in India. 11. Ayuci reserves its right to change
            these policies periodically by updating this page. Write to us at
            care@samarthmeditech.com if you have any concerns with the current
            policy or any changes Ayuci may make in the future. XXI.
            Confidentiality 1. For the purpose of this Agreement and attachments
            thereto and all renewals, “Confidential Information” means all
            information (including any information relating to the Account,
            username or password etc.), methods developed for analysis,
            examination and verification and other such details (the “Disclosing
            Party”) or, which may be supplied to or may otherwise come into the
            possession of the other (the “Receiving Party”), whether orally or
            in writing or in any other form, and which is confidential or
            proprietary in nature or otherwise expressed by the Disclosing Party
            to be confidential and is not generally available to the public. 2.
            The Receiving Party shall keep confidential and secret and not
            disclose to any third party the Confidential Information or any part
            of it. The Receiving Party agrees to take all possible precautions
            in accordance with applicable laws, rules, regulations and standards
            to protect the Confidential Information from any third party. 3.
            Further no use, reproduction, transformation or storage of the
            Confidential Information shall be made by the User without the prior
            written permission of Samarth Meditech, except where required to be
            disclosed pursuant to any applicable law or legal process issued by
            any court or the rules of any competent regulatory body. 4. The
            User/Customer has access to only its own data and information stored
            in the database at Website (subject to prior confirmation of
            identity) and nothing more. The User/Customer may edit or amend such
            data and information from time to time, if Ayuci provides such an
            option. 5. All Confidential Information voluntarily revealed by the
            User/Customer, is done at the sole discretion and risk of the
            User/Customer. Ayuci shall not be responsible for misuse of any such
            information, collected by a third party, or any unsolicited messages
            from such third parties. 6. If the User/Customer is neither a
            genuine User/Customer nor an intended recipient and is using or
            accessing the Website to gain Confidential Information and if such a
            User/Customer/third party has obtained access to the Confidential
            Information, it shall be a flagrant breach of this Agreement. Any
            use or divulgence of such Confidential Information by such
            User/Customer/third party, shall entitle Ayuci to inquire and
            investigate and seek legal remedy against such User/Customer/third
            party. XXII. Miscellaneous 1. Governing law and Dispute Resolution:
            This Agreement and Terms of Use shall be governed by and constructed
            in accordance with the laws of India only without reference to
            conflict of laws principles and all disputes arising in relation
            hereto shall be subject to the exclusive jurisdiction of the courts
            of Mumbai, India. 2. Assignability : The Company may assign any of
            its responsibilities/obligations to any other Person without notice
            to the User, at its sole discretion. However, the User/Customer
            shall not assign, sub licence or otherwise transfer any of your
            rights under these Terms of Use to any other party, unless a written
            consent is taken from Samarth Meditech. 3. Severability : If any
            provision of these Terms of Use is found to be invalid, the
            invalidity of that provision will not affect the validity of the
            remaining provisions of the Terms of Use, which shall remain in full
            force and effect. 4. Waiver : Failure by Ayuci to exercise any right
            or remedy under these Terms of Use does not constitute a waiver of
            that right or remedy. 5. Force Majeure : Ayuci is not liable for
            failure to perform any of its obligations if such failure is as a
            result of acts of God (including fire, flood, earthquake, storm,
            hurricane or other natural disaster), war, invasion, act of foreign
            enemies, hostilities (regardless of whether war is declared), civil
            war, rebellion, revolution, insurrection, military or usurped power
            or confiscation, terrorist activities, nationalisation, government
            sanction, blockage, embargo, labour dispute, strike, bandh, lockout
            or any interruption or any failure of electricity or server, system,
            computer, internet or telephone service. 6. Grievance Redressal: The
            Company shall endeavour to address grievance or complaints of the
            Users to the extent possible. Towards this Ayuci is committed to
            form a Grievance Redressal Cell, which can be reached on the
            telephone number as mentioned in the Website or may e-mail Ayuci at
            care@samarthmeditech.com. XXIII. Communication with and by
            User/Customers When you visit the Website or use it to send
            emails/text messages, provide information or communicate to us, you
            understand and agree that you are creating electronic records. You
            hereby provide your consent to receive communications via electronic
            records from us periodically or as and when required. Further, you
            allow Ayuci to communicate with you through email or by such other
            mode of communication, electronic or otherwise as the need may be
          </Text>
        </View>
      </ScrollView>
    </>
  );
}
