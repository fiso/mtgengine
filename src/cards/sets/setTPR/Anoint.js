"use strict";
const Constants = require ("../../../Constants");
const AnointBase = require("../setTMP/Anoint");

class Anoint extends AnointBase {
  constructor (game) {
    super(game, "Anoint", "Tempest Remastered", "TPR");
  }
}

module.exports = Anoint;
