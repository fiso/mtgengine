"use strict";
const Constants = require ("../../../Constants");
const EzurisArchersBase = require("../setDDU/EzurisArchers");

class EzurisArchers extends EzurisArchersBase {
  constructor (game) {
    super(game, "Ezuri's Archers", "Scars of Mirrodin", "SOM");
  }
}

module.exports = EzurisArchers;
