import React from "react";
import Layout from "./layout";

function TermsOfUse() {
  return (
    <Layout>
      <div className="bg-gray-100 min-h-screen">
        <div className="max-w-4xl mx-auto px-4 py-8">
          <h2 className="text-2xl font-semibold mb-4">Terms of Use</h2>
          {/* <p className="font-semibold mb-2">Legal</p> */}
          <p className="font-semibold mb-2">Copyright Issues</p>
          <p className="mb-4">
            The Britewizard website contains documents and resources contributed
            by various entities that may be protected under U.S. and
            international copyright laws. Reproduction or transmission of these
            materials beyond fair use as defined by law requires prior written
            permission from the copyright owners.
          </p>
          <p className="font-semibold mb-2">Disclaimers</p>
          <p className="mb-4">
            Information on this website is provided for the benefit of visitors.
            While we strive to ensure accuracy and currency, Britewizard does
            not guarantee the reliability or authenticity of third- party
            information. Britewizard disclaims any liability for actions taken
            based on the information presented, as well as any consequences
            arising from such actions.
          </p>
          {/* <p className="mb-4">User Responsibility:</p>
          <p className="mb-4">
            The information presented here is intended for general informational
            purposes only. You are responsible for making informed decisions
            based on your specific circumstances and independent research.
            Eductre is not liable for any actions or omissions resulting from
            your reliance on website content.
          </p> */}
          <p className="font-semibold mb-2">External Links</p>
          <p className="mb-4">
            Britewizard’s web portal may feature links to external websites
            managed by other organizations. These links are included to provide
            useful information to visitors. However, the presence of a link does
            not imply endorsement of the external site or its content.
            Britewizard may remove or update links at any time without prior
            notice. For concerns about linked external websites, please contact
            the respective organizations. Britewizard is not responsible for the
            content of external websites.
          </p>
          <p className="mb-4">
            If you encounter issues with linked external websites, please
            contact the respective organization. Britewizard is not responsible
            for the content or functionality of external websites.
          </p>
          {/* <p className="mb-4">
            Please note that inclusion of a hypertext link to an external
            website does not constitute an endorsement of any product, service,
            or organization referenced therein, nor does it imply agreement with
            any views expressed on the linked website. Hypertext links to
            external websites and pages may be removed or replaced at the
            discretion of Eductre, without prior notice.
          </p>
          <p className="mb-4">
            If you encounter any issues regarding the format, accuracy,
            timeliness, or completeness of a linked external website, please
            contact the organization responsible for that website. Eductre does
            not exercise control over, nor assume responsibility for, the
            content of linked external websites or pages.
          </p> */}
        </div>
      </div>
    </Layout>
  );
}

export default TermsOfUse;
