---
id: members
title: Membros do projeto - EC7
sidebar_label: Apresentação
---

export const MemberInfo = ({imageUrl, nameAndRa}) => (
    <div style={{
        width: '400px',
        height: '400px',
        display: 'inline-block',
        marginRight: '10px',
        marginBottom: '50px'
    }}>
        <img src={imageUrl} style={{
             width: '400px',
             height: '400px',
             display: 'inline-block'
        }}/>
        <h2>{nameAndRa}</h2>
    </div>
);

<MemberInfo imageUrl="../../img/members/anderson.jpg" nameAndRa="Anderson Dias - 081180002"/>
<MemberInfo imageUrl="../../img/members/rachel.jpg" nameAndRa="Rachel Moreira - 081180045"/>
<MemberInfo imageUrl="../../img/members/renan.jpg" nameAndRa="Renan Castro - 081180029" />
<MemberInfo imageUrl="../../img/members/wellison.jpg" nameAndRa="Wellison Sousa - 081180040"/>
<MemberInfo imageUrl="../../img/members/wesley.jpg" nameAndRa="Wesley Rogério - 081180035"/>
