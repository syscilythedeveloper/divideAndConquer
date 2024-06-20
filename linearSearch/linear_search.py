def linear_search(arr, value):
    for i in range(len(arr)):
        if arr[i] == value:
            return i
    return -1



destinys_child = ["Michelle", "Kelly", "Beyonce"];
dc_former_members = ["Letoya", "Lativia", "Farrah"]

def search_rnb_group(group, name, former_members= None):
    if former_members is None:
        former_members = []

    if name in former_members:
            return f"{name} was once a member but is no longer in the group"
 

    for i in range(len(group)): 
        if group[i] == name:
            return f"{name} is in the group"
    return f"{name} is NOT in the group"

    
# print(search_rnb_group(destinys_child, "Michelle", dc_former_members))
# print(search_rnb_group(destinys_child,"Beyonce", dc_former_members))
# print(search_rnb_group(destinys_child, "Kelly", dc_former_members))
# print(search_rnb_group(destinys_child,"Sza", dc_former_members))
# print(search_rnb_group(destinys_child,"Letoya"))
# print(search_rnb_group(destinys_child,"Letoya", dc_former_members))