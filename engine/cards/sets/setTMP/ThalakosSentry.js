"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class ThalakosSentry extends UnimplementedCard {
  constructor(game) {
    super(game, "Thalakos Sentry", "Tempest", "TMP");
  }
}

module.exports = ThalakosSentry;
