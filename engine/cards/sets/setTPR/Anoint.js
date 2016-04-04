"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const AnointBase = require("../setTMP/Anoint.js");

class Anoint extends AnointBase {
  constructor(game) {
    super(game, "Anoint", "Tempest Remastered", "TPR");
  }
}

module.exports = Anoint;
