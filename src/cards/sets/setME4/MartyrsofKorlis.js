"use strict";
const Constants = require ("../../../Constants");
const MartyrsofKorlisBase = require("../setATQ/MartyrsofKorlis");

class MartyrsofKorlis extends MartyrsofKorlisBase {
  constructor(game) {
    super(game, "Martyrs of Korlis", "Masters Edition IV", "ME4");
  }
}

module.exports = MartyrsofKorlis;
