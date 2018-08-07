"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class RevokePrivileges extends UnimplementedCard {
  constructor (game) {
    super(game, "Revoke Privileges", "Kaladesh", "KLD");
  }
}

module.exports = RevokePrivileges;
