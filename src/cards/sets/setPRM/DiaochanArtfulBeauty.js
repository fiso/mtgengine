"use strict";
const Constants = require ("../../../Constants");
const DiaochanArtfulBeautyBase = require("../setPZ1/DiaochanArtfulBeauty");

class DiaochanArtfulBeauty extends DiaochanArtfulBeautyBase {
  constructor (game) {
    super(game, "Diaochan, Artful Beauty", "Magic Online Promos", "PRM");
  }
}

module.exports = DiaochanArtfulBeauty;
