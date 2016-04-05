"use strict";
const Constants = require ("../../../Constants");
const NantukoDiscipleBase = require("../set8ED/NantukoDisciple");

class NantukoDisciple extends NantukoDiscipleBase {
  constructor(game) {
    super(game, "Nantuko Disciple", "Odyssey", "ODY");
  }
}

module.exports = NantukoDisciple;
