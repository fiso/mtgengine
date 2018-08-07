"use strict";
const Constants = require ("../../../Constants");
const RedirectBase = require("../setM13/Redirect");

class Redirect extends RedirectBase {
  constructor (game) {
    super(game, "Redirect", "Magic 2011", "M11");
  }
}

module.exports = Redirect;
