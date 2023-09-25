import { Bars3Icon } from "@heroicons/react/24/solid"
import { Drawer, List, ListItem, Typography } from "@material-tailwind/react"
import Link from "next/link"
import { useState } from "react"

const NavBar = () => {
  const [open, setOpen] = useState(false)

  const openDrawer = () => setOpen(true)
  const closeDrawer = () => setOpen(false)

  return (
    <div className="py-2 mb-4 mx-2 flex justify-between">
      <div>
        <Link href="/">
          <Typography variant="h6" color="white">
            TRAINING PRO
          </Typography>
        </Link>
      </div>
      <div>
        <Bars3Icon onClick={openDrawer} color="white" className="h-6 w-6" />
        <Drawer
          placement="top"
          open={open}
          onClose={closeDrawer}
          className="p-4"
        >
          <div className="mb-6 flex items-center justify-between">
            <Link href="/">
              <Typography variant="h5" color="blue-gray">
                TRAINING PRO
              </Typography>
            </Link>
          </div>
          <List>
            <Link href="/faq">
              <ListItem>
                <Typography color="blue-gray">new page</Typography>
              </ListItem>
            </Link>
          </List>
        </Drawer>
      </div>
    </div>
  )
}

export default NavBar
