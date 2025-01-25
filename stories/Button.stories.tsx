// import React from "react";
// import { Meta, StoryFn } from "@storybook/react";
// import EditForm, { EditFormProps } from "../app/[locale]/components/EditForm/EditForm";
// import { action } from "@storybook/addon-actions";

// // Définir une action explicite
// const onCloseAction = action("onClose");

// export default {
//   title: "Components/EditForm",
//   component: EditForm,
// } as Meta<EditFormProps>;

// const Template: StoryFn<EditFormProps> = (args) => <EditForm {...args} />;

// export const Default = Template.bind({});
// Default.args = {
//   lang: "en",
//   annonceId: 123,
//   userid: 1,
//   initialData: {
//     typeAnnonceId: 1,
//     categorieId: 2,
//     subcategorieId: 3,
//     description: "Description initiale",
//     price: 500,
//   },
//   onClose: onCloseAction,
// };
