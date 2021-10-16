// First, we must import the schema creator
import createSchema from 'part:@sanity/base/schema-creator'

// Then import schema types from any plugins that might expose them
import schemaTypes from 'all:part:@sanity/base/schema-type'

// Documents Schema
import home from './documents/home'
import info from './documents/info'
import project from './documents/project'
import settings from './documents/settings'

// Objects Schema
import a11yImage from './objects/image'
import imageWithCaption from './objects/imageWithCaption'
import doubleImage from './objects/doubleImage'
import link from './objects/link'
import seo from './objects/seo'
import writing from './documents/writing'
import alignedImage from './objects/alignedImage'
import textModule from './objects/textModule'
import textSectionModule from './objects/textSectionModule'


// Then we give our schema to the builder and provide the result to Sanity
export default createSchema({
  // We name our schema
  name: 'default',
  // Then proceed to concatenate our document type
  // to the ones provided by any plugins that are installed
  types: schemaTypes.concat([
    /* Your types here! */
    home,
    info,
    project,
    writing,
    settings,
    
    link,
    a11yImage,
    imageWithCaption,
    doubleImage,
    alignedImage,
    textModule,
    textSectionModule,
    seo
  ]),
})
