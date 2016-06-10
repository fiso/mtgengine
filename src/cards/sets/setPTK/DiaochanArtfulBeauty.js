"use strict";
const Constants = require ("../../../Constants");
const DiaochanArtfulBeautyBase = require("../setCM1/DiaochanArtfulBeauty");

class DiaochanArtfulBeauty extends DiaochanArtfulBeautyBase {
  constructor (game) {
    super(game, "Diaochan, Artful Beauty", "Portal Three Kingdoms", "PTK");
  }
}

module.exports = DiaochanArtfulBeauty;
