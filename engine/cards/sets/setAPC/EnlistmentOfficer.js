"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class EnlistmentOfficer extends UnimplementedCard {
  constructor(game) {
    super(game, "Enlistment Officer", "Apocalypse", "APC");
  }
}

module.exports = EnlistmentOfficer;
