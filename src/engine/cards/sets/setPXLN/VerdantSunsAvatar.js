"use strict";
const Constants = require ("../../../Constants");
const VerdantSunsAvatarBase = require("../setXLN/VerdantSunsAvatar");

class VerdantSunsAvatar extends VerdantSunsAvatarBase {
  constructor (game) {
    super(game, "Verdant Sun's Avatar", "Ixalan Promos", "PXLN");
  }
}

module.exports = VerdantSunsAvatar;
