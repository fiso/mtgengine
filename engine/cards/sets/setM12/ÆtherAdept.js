"use strict";
const Constants = require ("../../../Constants");
const ÆtherAdeptBase = require("../setDDM/ÆtherAdept");

class ÆtherAdept extends ÆtherAdeptBase {
  constructor(game) {
    super(game, "Æther Adept", "Magic 2012", "M12");
  }
}

module.exports = ÆtherAdept;
