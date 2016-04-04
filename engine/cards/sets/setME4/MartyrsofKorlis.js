"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const MartyrsofKorlisBase = require("../setATQ/MartyrsofKorlis.js");

class MartyrsofKorlis extends MartyrsofKorlisBase {
  constructor(game) {
    super(game, "Martyrs of Korlis", "Masters Edition IV", "ME4");
  }
}

module.exports = MartyrsofKorlis;
