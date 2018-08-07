"use strict";
const Constants = require ("../../../Constants");
const DrafnasRestorationBase = require("../setPZ2/DrafnasRestoration");

class DrafnasRestoration extends DrafnasRestorationBase {
  constructor (game) {
    super(game, "Drafna's Restoration", "Antiquities", "ATQ");
  }
}

module.exports = DrafnasRestoration;
