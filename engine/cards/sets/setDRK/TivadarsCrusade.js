"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const TivadarsCrusadeBase = require("../setMED/TivadarsCrusade.js");

class TivadarsCrusade extends TivadarsCrusadeBase {
  constructor(game) {
    super(game, "Tivadar's Crusade", "The Dark", "DRK");
  }
}

module.exports = TivadarsCrusade;
