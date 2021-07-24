import S from '@sanity/desk-tool/structure-builder'
import { FcHome } from "react-icons/fc";
import { FcInfo } from "react-icons/fc";


export default () =>
  S.list()

    // Doc List Title
    .title('Site Content.')
    .items([

      // Homepage Doc
      S.listItem()
      .title('Home')
      .icon(FcHome)
      .child(
        S.document()
        .schemaType('home')
      ),

      // Other Docs
      ...S.documentTypeListItems().filter(listItem => !['home', 'info'].includes(listItem.getId())),

      // Divider
      S.divider(),

      // Info Doc
      S.listItem()
      .title('Information')
      .icon(FcInfo)
      .child(
        S.document()
        .schemaType('info')
      ),
    ],
      
  )

