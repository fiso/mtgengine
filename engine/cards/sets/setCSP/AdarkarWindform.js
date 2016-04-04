"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class AdarkarWindform extends UnimplementedCard {
  constructor(game) {
    super(game, "Adarkar Windform", "Coldsnap", "CSP");
  }
}

module.exports = AdarkarWindform;
