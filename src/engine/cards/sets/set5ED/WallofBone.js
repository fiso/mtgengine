'use strict';
const Constants = require('../../../Constants');
const WallofBoneBase = require('../setGVL/WallofBone');

class WallofBone extends WallofBoneBase {
  constructor (game) {
    super(game, 'Wall of Bone', 'Fifth Edition', '5ED');
  }
}

module.exports = WallofBone;
