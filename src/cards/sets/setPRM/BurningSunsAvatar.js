"use strict";
const Constants = require ("../../../Constants");
const BurningSunsAvatarBase = require("../setXLN/BurningSunsAvatar");

class BurningSunsAvatar extends BurningSunsAvatarBase {
  constructor (game) {
    super(game, "Burning Sun's Avatar", "Magic Online Promos", "PRM");
  }
}

module.exports = BurningSunsAvatar;
