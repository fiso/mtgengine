"use strict";
const Constants = require ("../../../Constants");
const PrakhataClubSecurityBase = require("../setBBD/PrakhataClubSecurity");

class PrakhataClubSecurity extends PrakhataClubSecurityBase {
  constructor (game) {
    super(game, "Prakhata Club Security", "Kaladesh", "KLD");
  }
}

module.exports = PrakhataClubSecurity;
