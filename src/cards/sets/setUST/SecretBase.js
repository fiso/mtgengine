"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class SecretBase extends UnimplementedCard {
  constructor (game) {
    super(game, "Secret Base", "Unstable", "UST");
  }
}

module.exports = SecretBase;
