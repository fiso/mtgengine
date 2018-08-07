"use strict";
const Constants = require ("../../../Constants");
const DemystifyBase = require("../setXLN/Demystify");

class Demystify extends DemystifyBase {
  constructor (game) {
    super(game, "Demystify", "Magic 2012", "M12");
  }
}

module.exports = Demystify;
