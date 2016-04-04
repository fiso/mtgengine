"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const DetonateBase = require("../setATQ/Detonate.js");

class Detonate extends DetonateBase {
  constructor(game) {
    super(game, "Detonate", "Fifth Edition", "5ED");
  }
}

module.exports = Detonate;
