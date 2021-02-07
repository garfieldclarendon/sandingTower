import createSchema from 'part:@sanity/base/schema-creator'
import schemaTypes from 'all:part:@sanity/base/schema-type'
import user from './user'
import concist from './concist'


export default createSchema({
  name: 'sandingTower',
  types: schemaTypes.concat([
    user,
    concist,
  ]),
})
