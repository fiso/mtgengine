"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const RedirectBase = require("../setM11/Redirect.js");

class Redirect extends RedirectBase {
  constructor(game) {
    super(game, "Redirect", "Magic 2013", "M13");
  }
}

module.exports = Redirect;
