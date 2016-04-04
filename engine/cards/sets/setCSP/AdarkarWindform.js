"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class AdarkarWindform extends Card {
  constructor(game) {
    super(game, "Adarkar Windform", "Coldsnap", "CSP");
  }
}

module.exports = AdarkarWindform;
