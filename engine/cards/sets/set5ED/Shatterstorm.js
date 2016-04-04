"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const ShatterstormBase = require("../setATQ/Shatterstorm.js");

class Shatterstorm extends ShatterstormBase {
  constructor(game) {
    super(game, "Shatterstorm", "Fifth Edition", "5ED");
  }
}

module.exports = Shatterstorm;
