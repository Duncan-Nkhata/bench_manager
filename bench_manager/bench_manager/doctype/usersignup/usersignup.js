// Copyright (c) 2020, Frappe and contributors
// For license information, please see license.txt
/****
 * 
 * 


frappe.ui.form.on('UserSignup', {
	refresh: function(frm) {
		//frappe.msgprint(frm);
		//console.log()
	},
	validate: function(frm) {
		var f = frm.doc;

		// insert a new lead:
		frappe.db.insert({
			doctype: 'Lead', 
			status: 'Lead', 
			lead_name: f.first_name + ' ' + f.last_name
		})	
		
	}
});


  
 
 */
