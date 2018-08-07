"use strict";
const Constants = require ("../../../Constants");
const BoseijuWhoSheltersAllBase = require("../setV12/BoseijuWhoSheltersAll");

class BoseijuWhoSheltersAll extends BoseijuWhoSheltersAllBase {
  constructor (game) {
    super(game, "Boseiju, Who Shelters All", "Champions of Kamigawa", "CHK");
  }
}

module.exports = BoseijuWhoSheltersAll;
