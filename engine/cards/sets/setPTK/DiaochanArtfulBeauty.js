"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const DiaochanArtfulBeautyBase = require("../setCM1/DiaochanArtfulBeauty.js");

class DiaochanArtfulBeauty extends DiaochanArtfulBeautyBase {
  constructor(game) {
    super(game, "Diaochan, Artful Beauty", "Portal Three Kingdoms", "PTK");
  }
}

module.exports = DiaochanArtfulBeauty;
