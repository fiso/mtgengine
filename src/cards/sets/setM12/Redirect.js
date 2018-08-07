"use strict";
const Constants = require ("../../../Constants");
const RedirectBase = require("../setM13/Redirect");

class Redirect extends RedirectBase {
  constructor (game) {
    super(game, "Redirect", "Magic 2012", "M12");
  }
}

module.exports = Redirect;
