import React from "react";
import { FloatingWhatsApp } from "react-floating-whatsapp";

import arqamAcademyIcon from "../../assets/arqamAcademyIcon.jpg";

export const Whatsapp = () => {
  return (
    <div>
      <FloatingWhatsApp
        phoneNumber="+923270029087"
        accountName="Arqam Quran Academy"
        allowEsc
        allowClickAway
        chatboxHeight={360}
        notification
        notificationSound
        chatMessage="Salam, How are you?"
        avatar={arqamAcademyIcon}
        // statusMessage="online"
        // style={{accountName:"margin:0"}}
      />
    </div>
  );
};
