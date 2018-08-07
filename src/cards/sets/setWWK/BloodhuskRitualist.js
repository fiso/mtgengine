"use strict";
const Constants = require ("../../../Constants");
const BloodhuskRitualistBase = require("../setC17/BloodhuskRitualist");

class BloodhuskRitualist extends BloodhuskRitualistBase {
  constructor (game) {
    super(game, "Bloodhusk Ritualist", "Worldwake", "WWK");
  }
}

module.exports = BloodhuskRitualist;
