"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const BoseijuWhoSheltersAllBase = require("../setCHK/BoseijuWhoSheltersAll.js");

class BoseijuWhoSheltersAll extends BoseijuWhoSheltersAllBase {
  constructor(game) {
    super(game, "Boseiju, Who Shelters All", "From the Vault: Realms", "V12");
  }
}

module.exports = BoseijuWhoSheltersAll;
