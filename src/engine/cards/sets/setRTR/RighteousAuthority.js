"use strict";
const Constants = require ("../../../Constants");
const RighteousAuthorityBase = require("../setC18/RighteousAuthority");

class RighteousAuthority extends RighteousAuthorityBase {
  constructor (game) {
    super(game, "Righteous Authority", "Return to Ravnica", "RTR");
  }
}

module.exports = RighteousAuthority;
