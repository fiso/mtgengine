"use strict";
const Constants = require ("../../../Constants");
const AngelsMercyBase = require("../setM13/AngelsMercy");

class AngelsMercy extends AngelsMercyBase {
  constructor (game) {
    super(game, "Angel's Mercy", "Magic 2012", "M12");
  }
}

module.exports = AngelsMercy;
