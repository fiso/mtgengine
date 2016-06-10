"use strict";
const Constants = require ("../../../Constants");
const GorehornMinotaursBase = require("../setDDL/GorehornMinotaurs");

class GorehornMinotaurs extends GorehornMinotaursBase {
  constructor (game) {
    super(game, "Gorehorn Minotaurs", "Magic 2012", "M12");
  }
}

module.exports = GorehornMinotaurs;
