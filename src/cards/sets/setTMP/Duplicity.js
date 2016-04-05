"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Duplicity extends UnimplementedCard {
  constructor(game) {
    super(game, "Duplicity", "Tempest", "TMP");
  }
}

module.exports = Duplicity;
