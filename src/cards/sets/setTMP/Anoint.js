"use strict";
const Constants = require ("../../../Constants");
const AnointBase = require("../setTPR/Anoint");

class Anoint extends AnointBase {
  constructor (game) {
    super(game, "Anoint", "Tempest", "TMP");
  }
}

module.exports = Anoint;
