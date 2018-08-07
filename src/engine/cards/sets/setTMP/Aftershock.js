"use strict";
const Constants = require ("../../../Constants");
const AftershockBase = require("../setTPR/Aftershock");

class Aftershock extends AftershockBase {
  constructor (game) {
    super(game, "Aftershock", "Tempest", "TMP");
  }
}

module.exports = Aftershock;
