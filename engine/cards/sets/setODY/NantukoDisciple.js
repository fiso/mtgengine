"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const NantukoDiscipleBase = require("../set8ED/NantukoDisciple.js");

class NantukoDisciple extends NantukoDiscipleBase {
  constructor(game) {
    super(game, "Nantuko Disciple", "Odyssey", "ODY");
  }
}

module.exports = NantukoDisciple;
